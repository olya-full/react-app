import { rest } from "msw"

export const handlers = [
  rest.get(`https://www.flickr.com/services/rest`, (request, response, context) => {

    return response(
      context.json({
        photos: {
          page: 1,
          pages: 42,
          perpage: 100,
          total: 4123,
          photo: [{
            id: "52753908477",
            owner: "Michael",
            secret: "95333e8fc2",
            server: "34234234",
            title: "Pen and pencil",
          }],
        },
        stat: "ok",
      })
    )
  })
]