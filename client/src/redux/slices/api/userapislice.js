import { apiSlice } from "./apiSlice";
const USER_URL = "/user";

export const userapislice= apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        updateUser : builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/profile`,
                 method : 'PUT',
                 body : data,
                 credentials : "include",//before it was true
            }),
        }),

        getTeamList : builder.query({
            query: (data)=>({
                url: `${USER_URL}/get-team`,
                 method : 'GET',
                 
                 credentials : "include",//before it was true
            }),
        }),

        deleteUser : builder.mutation({
            query: (id)=>({
                url: `${USER_URL}/${id}`,
                 method : 'DELETE',
                 
                 credentials : "include",//before it was true
            }),
        }),

        userAction : builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/${data.id}`,
                 method : 'PUT',
                body : data,
                 credentials : "include",//before it was true
            }),
        }),
        getNotifications : builder.query({
            query: ()=>({
                url: `${USER_URL}/notifications`,
                 method : 'GET',
                 credentials : "include",//before it was true
            }),
        }),
        markNotAsRead : builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/read-noti?isReadType=${data.type}&id=${data?.id}`,
                 method : 'PUT',
                 body : data,
                 credentials : "include",//before it was true
            }),
        }),
        changePassword : builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/change-password`,
                 method : 'PUT',
                 body : data,
                 credentials : "include",//before it was true
            }),
        }),
    }),
});

export const {useUpdateUserMutation,useGetTeamListQuery,useDeleteUserMutation,useUserActionMutation,useChangePasswordMutation,useGetNotificationsQuery,useMarkNotAsReadMutation} = userapislice;