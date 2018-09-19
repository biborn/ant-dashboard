import { createSelector } from 'reselect';

const getProfiles = (state) => state.profileReducer.profiles
const filterText = (state) => state.profileReducer.filterText

export const getProfilesState = createSelector(
    [getProfiles, filterText],
    (profile, filterText) => {
        return profile.filter((profile) => {
           return (profile.name).toLowerCase().includes(filterText.toLowerCase())
            || (profile.location).toLowerCase().includes(filterText.toLowerCase())
            || (profile.email).toLowerCase().includes(filterText.toLowerCase())
        })
    }
)