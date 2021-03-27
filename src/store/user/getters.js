export const currentUser = (state) => state.currentUser
export const err = (state) => state.err

export const getLetterUser = state => {
  const { currentUser } = state
  return currentUser.name ? currentUser.name[0] : '.'
}

export const geoLocation = (state) => state.geoLocation

export const tags = (state) => state.tags


