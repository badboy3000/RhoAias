<style lang="scss">
#create-answer-form {
  .source-url {
    margin-bottom: 15px;

    input {
      border-top: none;
      border-right: none;
      border-left: none;
    }
  }

  .json-editor-main {
    margin-bottom: 55px;

    .text-preview {
      padding-bottom: 0;

      .footer {
        display: none;
      }
    }

    .image-preview {
      .save-btn {
        display: none;
      }
    }
  }
}

.qaq-editor-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 52px;
  border-top: 1px solid $color-line;
  padding-top: 7px;
  text-align: right;
  background-color: #fff;
}
</style>

<template>
  <v-drawer
    v-model="show"
    :header-text="answerId ? '编辑回答' : '写回答'"
    from="bottom"
    size="100%"
  >
    <div id="create-answer-form" class="container">
      <h3 class="sub-title">
        转载
      </h3>
      <el-input
        v-model="source_url"
        placeholder="如果是转载，请复制原文链接至此"
        class="source-url"
        size="medium"
      />
      <h3 class="sub-title">
        正文
      </h3>
      <JsonEditor @submit="beforeSubmit" />
    </div>
    <div class="qaq-editor-footer">
      <div class="container">
        <el-button
          v-if="!published"
          :loading="saving"
          plain
          size="medium"
          @click="$channel.$emit('write-save')"
        >
          {{ id ? '更新草稿' : '存草稿' }}
        </el-button>
        <el-button
          :loading="saving"
          size="medium"
          type="primary"
          @click="$channel.$emit('write-publish')"
        >
          {{ published ? '更新回答' : id ? '发布回答' : '提交回答' }}
        </el-button>
      </div>
    </div>
  </v-drawer>
</template>

<script>
import { createAnswer, updateAnswer } from '~/api/answerApi'
import JsonEditor from '~/components/jsonEditor/index'

export default {
  name: 'CreateAnswerForm',
  components: {
    JsonEditor
  },
  props: {
    title: {
      required: true,
      type: String
    },
    questionId: {
      required: true,
      type: Number
    },
    value: {
      required: true,
      type: Boolean
    },
    answerId: {
      type: Number,
      default: 0
    },
    published: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      id: this.answerId,
      show: this.value,
      source_url: '',
      saving: false
    }
  },
  computed: {
    resource() {
      return this.$store.state.editor.resource
    }
  },
  mounted() {
    this.$watch('show', val => {
      this.$emit('input', val)
    })
    this.$watch('value', val => {
      this.show = val
    })
    this.loadEditContent()
  },
  methods: {
    beforeSubmit(richContent) {
      if (
        this.source_url &&
        !/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i.test(
          this.source_url
        )
      ) {
        this.$toast.error('请输入合法转载链接')
        return
      }
      if (this.saving) {
        return
      }
      this.saving = true
      if (this.id) {
        this.submit(richContent)
      } else {
        this.$captcha({
          ctx: this,
          success: ({ data }) => {
            this.submit(richContent, data)
          },
          close: () => {
            this.saving = false
          }
        })
      }
    },
    async submit(richContent, geetest = {}) {
      this.$toast.loading('保存中')
      this.$channel.$emit('write-submit', true)
      try {
        const form = {
          question_id: this.questionId,
          content: richContent.content,
          intro: richContent.desc.substring(0, 120),
          do_publish: richContent.publish,
          source_url: this.source_url.split('?')[0],
          geetest
        }
        let result
        if (this.id) {
          form.id = this.id
          await updateAnswer(this, form)
        } else {
          result = await createAnswer(this, form)
          this.id = result.data
        }
        if (richContent.publish) {
          this.$store.commit('UPDATE_USER_EXP', 4)
          this.$toast
            .success(
              typeof result !== 'undefined' ? result.message : '发布成功'
            )
            .then(() => {
              window.location.href = this.$alias.answer(this.id)
            })
        } else {
          this.$toast.success(
            typeof result !== 'undefined' ? result.message : '保存成功'
          )
          // this.$store.commit('question/EDIT_ANSWER', { id: this.id })
          this.closeEditor()
        }
      } catch (e) {
        this.$toast.error(e)
      } finally {
        this.saving = false
      }
    },
    loadEditContent() {
      if (this.resource) {
        this.source_url = this.resource.source_url
      }
    },
    closeEditor() {
      this.show = false
    }
  }
}
</script>
