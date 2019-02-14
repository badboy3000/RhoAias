export const getCartoonRoleInfo = (ctx, { id }) => {
  return ctx.$axios.$get(`cartoon_role/${id}/stock_show`)
}

export const getTodayActivity = ctx => {
  return ctx.$axios.$get(
    `cartoon_role/list/today?t=${Date.now()}-${Math.random()
      .toString(36)
      .substring(3, 6)}`
  )
}

export const dalaoUsers = ctx => {
  return ctx.$axios.$get('cartoon_role/list/dalao')
}

export const newbieUsers = ctx => {
  return ctx.$axios.$get('cartoon_role/list/newbie')
}

export const starRoleAction = (ctx, { id, amount }) => {
  return ctx.$axios.$post(`cartoon_role/${id}/buy_stock`, {
    amount
  })
}

export const createRole = (ctx, { bangumi_id, name, intro, avatar, alias }) => {
  return ctx.$axios.$post('cartoon_role/manager/create', {
    bangumi_id,
    name,
    intro,
    avatar,
    alias
  })
}

export const editRole = (ctx, form) => {
  return ctx.$axios.$post('cartoon_role/manager/edit', form)
}

export const createCartoonRole = (ctx, form) => {
  return ctx.$axios.$post('cartoon_role/manager/user_create', form)
}

export const getCartoonRoleDeal = (ctx, { id }) => {
  return ctx.$axios.$get(`cartoon_role/${id}/get_idol_deal`)
}

export const createCartoonRoleDeal = (ctx, form) => {
  return ctx.$axios.$post('cartoon_role/create_deal', form)
}

export const makeCartoonRoleDeal = (ctx, form) => {
  return ctx.$axios.$post('cartoon_role/make_deal', form)
}

export const deleteCartoonRoleDeal = (ctx, { id }) => {
  return ctx.$axios.$post('cartoon_role/delete_deal', { id })
}

export const changeStockPrice = (
  ctx,
  { idol_id, stock_price, max_stock_count }
) => {
  return ctx.$axios.$post('cartoon_role/manager/change_price', {
    idol_id,
    stock_price,
    max_stock_count
  })
}

export const getStockMarketMeta = ctx => {
  return ctx.$axios.$get('cartoon_role/stock_meta')
}

export const createMarketPriceDraft = (ctx, form) => {
  return ctx.$axios.$post('cartoon_role/create_market_price_draft', form)
}

export const marketPriceVote = (ctx, { is_agree, idol_id, draft_id }) => {
  return ctx.$axios.$post('cartoon_role/vote_market_price_draft', {
    is_agree,
    idol_id,
    draft_id
  })
}

export const changeCartoonRoleProfile = (
  ctx,
  { idol_id, qq_group, lover_words }
) => {
  return ctx.$axios.$post('cartoon_role/change_idol_profile', {
    idol_id,
    qq_group,
    lover_words
  })
}
