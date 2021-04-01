const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Valentin',
            status: 'I am a boss',
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_4KjP-pOzkij7U7wrIOIc5c0nzrpDRBiuA&usqp=CAU',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 2,
            followed: false,
            fullName: 'Alex',
            status: 'I am a boss',
            photoUrl: 'https://www.vokrug.tv/pic/person/f/b/d/8/fbd8cb0ad30cbfaff495794f968af719.jpeg',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 3,
            followed: true,
            fullName: 'Dmitry',
            status: 'I am a boss',
            photoUrl: 'https://img.kupigolos.ru/hero/5cd9cf2ef35c7.jpg?p=bh&s=81b7347d79c27958fe62bf98b7390c02',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default: return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });


export default usersReducer;