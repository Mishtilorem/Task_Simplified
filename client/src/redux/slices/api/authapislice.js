import {apiSlice} from "../api/apiSlice.js"


const AUTH_URL = "/user"
export const authapislice= apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        login : builder.mutation({
            query: (data)=>({
                url: `${AUTH_URL}/login`,
                 method : 'POST',
                 body : data,
                 credentials : "include",//before it was true
            }),
        }),

        register : builder.mutation({
            query: (data)=>({
                url: `${AUTH_URL}/register`,
                 method : 'POST',
                 body : data,
                 credentials : "include",//before it was true
            }),
        }),
        logout : builder.mutation({
            query: (data)=>({
                url: `${AUTH_URL}/logout`,
                 method : 'POST',
                 credentials : "include",//before it was true
            }),
        }),
        
    }),
});


export const {useLoginMutation,useRegisterMutation,useLogoutMutation} = authapislice
