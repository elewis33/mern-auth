import { apiSlice } from './apiSlice';
const LINKS_URL = '/api/links';

export const linkApiSlice = apiSlice.injectEndpoints({
  // these are the API actions and endpoints
  endpoints: (builder) => ({
    viewLink: builder.mutation({
      query: (data) => ({
        url: `${LINKS_URL}/links`,
        method: 'GET',
        body: data,
      }),
    }),
    addLink: builder.mutation({
      query: () => ({
        url: `${LINKS_URL}/link`,
        method: 'POST',
      }),
    }),
    updateLink: builder.mutation({
      query: (data) => ({
        url: `${LINKS_URL}/update`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteLink: builder.mutation({
      query: (data) => ({
        url: `${LINKS_URL}/delete`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useViewLinkMutation,
  useAddLinkMutation,
  useDeleteLinkMutation,
  useUpdateLinkMutation,
} = linkApiSlice;