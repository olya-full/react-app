function cov_2hdbhs1072() {
  var path = "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\Store\\PhotoApi.ts";
  var hash = "2348477fb80b459b0a0f1dc76b987a3a4c336d92";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\Store\\PhotoApi.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 21
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 25
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "2": {
        start: {
          line: 20,
          column: 24
        },
        end: {
          line: 67,
          column: 2
        }
      },
      "3": {
        start: {
          line: 24,
          column: 25
        },
        end: {
          line: 66,
          column: 3
        }
      },
      "4": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 30,
          column: 9
        }
      },
      "5": {
        start: {
          line: 33,
          column: 47
        },
        end: {
          line: 33,
          column: 49
        }
      },
      "6": {
        start: {
          line: 35,
          column: 8
        },
        end: {
          line: 41,
          column: 13
        }
      },
      "7": {
        start: {
          line: 36,
          column: 12
        },
        end: {
          line: 40,
          column: 15
        }
      },
      "8": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 29
        }
      },
      "9": {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 53,
          column: 9
        }
      },
      "10": {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 63,
          column: 10
        }
      },
      "11": {
        start: {
          line: 69,
          column: 63
        },
        end: {
          line: 69,
          column: 71
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 24,
            column: 13
          },
          end: {
            line: 24,
            column: 14
          }
        },
        loc: {
          start: {
            line: 24,
            column: 25
          },
          end: {
            line: 66,
            column: 3
          }
        },
        line: 24
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 13
          },
          end: {
            line: 26,
            column: 14
          }
        },
        loc: {
          start: {
            line: 26,
            column: 38
          },
          end: {
            line: 31,
            column: 7
          }
        },
        line: 26
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 32,
            column: 25
          },
          end: {
            line: 32,
            column: 26
          }
        },
        loc: {
          start: {
            line: 32,
            column: 55
          },
          end: {
            line: 44,
            column: 7
          }
        },
        line: 32
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 35,
            column: 33
          },
          end: {
            line: 35,
            column: 34
          }
        },
        loc: {
          start: {
            line: 35,
            column: 43
          },
          end: {
            line: 41,
            column: 11
          }
        },
        line: 35
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 49,
            column: 13
          },
          end: {
            line: 49,
            column: 14
          }
        },
        loc: {
          start: {
            line: 49,
            column: 29
          },
          end: {
            line: 54,
            column: 7
          }
        },
        line: 49
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 55,
            column: 25
          },
          end: {
            line: 55,
            column: 26
          }
        },
        loc: {
          start: {
            line: 55,
            column: 58
          },
          end: {
            line: 64,
            column: 7
          }
        },
        line: 55
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 26,
            column: 14
          },
          end: {
            line: 26,
            column: 33
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 26,
            column: 30
          },
          end: {
            line: 26,
            column: 33
          }
        }],
        line: 26
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2348477fb80b459b0a0f1dc76b987a3a4c336d92"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2hdbhs1072 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2hdbhs1072();
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhotoResponseJson, IPhotosResponseJson, ISearchResult } from "../../types/types";
const commonParams = (cov_2hdbhs1072().s[0]++, {
  api_key: "4b621c2314e1aacd9186e7425c899a6b",
  per_page: "100",
  page: "1",
  format: "json",
  nojsoncallback: "1",
  safe_search: "1"
});
const singleCardParams = (cov_2hdbhs1072().s[1]++, {
  api_key: "4b621c2314e1aacd9186e7425c899a6b",
  format: "json",
  nojsoncallback: "1",
  method: "flickr.photos.getInfo"
});
export const photoApi = (cov_2hdbhs1072().s[2]++, createApi({
  reducerPath: "api",
  tagTypes: ["searchResults"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.flickr.com/services/rest"
  }),
  endpoints: build => {
    cov_2hdbhs1072().f[0]++;
    cov_2hdbhs1072().s[3]++;
    return {
      getSearchResults: build.query<ISearchResult[], string>({
        query: (value: string = (cov_2hdbhs1072().b[0][0]++, "a")) => {
          cov_2hdbhs1072().f[1]++;
          cov_2hdbhs1072().s[4]++;
          return {
            url: `/?method=flickr.photos.search&text=${value}`,
            params: commonParams
          };
        },
        transformResponse: (res: IPhotosResponseJson) => {
          cov_2hdbhs1072().f[2]++;
          const adaptedResult: ISearchResult[] = (cov_2hdbhs1072().s[5]++, []);
          cov_2hdbhs1072().s[6]++;
          res.photos.photo.forEach(item => {
            cov_2hdbhs1072().f[3]++;
            cov_2hdbhs1072().s[7]++;
            adaptedResult.push({
              id: item.id,
              title: item.title,
              imageUrl: `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
            });
          });
          cov_2hdbhs1072().s[8]++;
          return adaptedResult;
        },
        providesTags: ["searchResults"]
      }),
      getOnePic: build.query<ISearchResult, string>({
        query: (id: string) => {
          cov_2hdbhs1072().f[4]++;
          cov_2hdbhs1072().s[9]++;
          return {
            url: `/?photo_id=${id}`,
            params: singleCardParams
          };
        },
        transformResponse: (resData: IPhotoResponseJson) => {
          cov_2hdbhs1072().f[5]++;
          cov_2hdbhs1072().s[10]++;
          return {
            id: resData.photo.id,
            title: resData.photo.title._content,
            imageUrl: `https://live.staticflickr.com/${resData.photo.server}/${resData.photo.id}_${resData.photo.secret}.jpg`,
            date: resData.photo.dates.posted,
            author: resData.photo.owner.realname,
            location: resData.photo.owner.location
          };
        }
      })
    };
  }
}));
export const {
  useGetSearchResultsQuery,
  useGetOnePicQuery
} = (cov_2hdbhs1072().s[11]++, photoApi);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmhkYmhzMTA3MiIsImFjdHVhbENvdmVyYWdlIiwiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJJUGhvdG9SZXNwb25zZUpzb24iLCJJUGhvdG9zUmVzcG9uc2VKc29uIiwiSVNlYXJjaFJlc3VsdCIsImNvbW1vblBhcmFtcyIsInMiLCJhcGlfa2V5IiwicGVyX3BhZ2UiLCJwYWdlIiwiZm9ybWF0Iiwibm9qc29uY2FsbGJhY2siLCJzYWZlX3NlYXJjaCIsInNpbmdsZUNhcmRQYXJhbXMiLCJtZXRob2QiLCJwaG90b0FwaSIsInJlZHVjZXJQYXRoIiwidGFnVHlwZXMiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZW5kcG9pbnRzIiwiYnVpbGQiLCJmIiwiZ2V0U2VhcmNoUmVzdWx0cyIsInF1ZXJ5IiwidmFsdWUiLCJiIiwidXJsIiwicGFyYW1zIiwidHJhbnNmb3JtUmVzcG9uc2UiLCJyZXMiLCJhZGFwdGVkUmVzdWx0IiwicGhvdG9zIiwicGhvdG8iLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJpZCIsInRpdGxlIiwiaW1hZ2VVcmwiLCJzZXJ2ZXIiLCJzZWNyZXQiLCJwcm92aWRlc1RhZ3MiLCJnZXRPbmVQaWMiLCJyZXNEYXRhIiwiX2NvbnRlbnQiLCJkYXRlIiwiZGF0ZXMiLCJwb3N0ZWQiLCJhdXRob3IiLCJvd25lciIsInJlYWxuYW1lIiwibG9jYXRpb24iLCJ1c2VHZXRTZWFyY2hSZXN1bHRzUXVlcnkiLCJ1c2VHZXRPbmVQaWNRdWVyeSJdLCJzb3VyY2VzIjpbIlBob3RvQXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBJUGhvdG9SZXNwb25zZUpzb24sIElQaG90b3NSZXNwb25zZUpzb24sIElTZWFyY2hSZXN1bHQgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcclxuXHJcbmNvbnN0IGNvbW1vblBhcmFtcyA9IHtcclxuICBhcGlfa2V5OiBcIjRiNjIxYzIzMTRlMWFhY2Q5MTg2ZTc0MjVjODk5YTZiXCIsXHJcbiAgcGVyX3BhZ2U6IFwiMTAwXCIsXHJcbiAgcGFnZTogXCIxXCIsXHJcbiAgZm9ybWF0OiBcImpzb25cIixcclxuICBub2pzb25jYWxsYmFjazogXCIxXCIsXHJcbiAgc2FmZV9zZWFyY2g6IFwiMVwiXHJcbn1cclxuXHJcbmNvbnN0IHNpbmdsZUNhcmRQYXJhbXMgPSB7XHJcbiAgYXBpX2tleTogXCI0YjYyMWMyMzE0ZTFhYWNkOTE4NmU3NDI1Yzg5OWE2YlwiLFxyXG4gIGZvcm1hdDogXCJqc29uXCIsXHJcbiAgbm9qc29uY2FsbGJhY2s6IFwiMVwiLFxyXG4gIG1ldGhvZDogXCJmbGlja3IucGhvdG9zLmdldEluZm9cIixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBob3RvQXBpID0gY3JlYXRlQXBpKHtcclxuICByZWR1Y2VyUGF0aDogXCJhcGlcIixcclxuICB0YWdUeXBlczogW1wic2VhcmNoUmVzdWx0c1wiXSxcclxuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHtiYXNlVXJsOiBcImh0dHBzOi8vd3d3LmZsaWNrci5jb20vc2VydmljZXMvcmVzdFwifSksXHJcbiAgZW5kcG9pbnRzOiAoYnVpbGQpID0+ICh7XHJcbiAgICBnZXRTZWFyY2hSZXN1bHRzOiBidWlsZC5xdWVyeTxJU2VhcmNoUmVzdWx0W10sIHN0cmluZz4oe1xyXG4gICAgICBxdWVyeTogKHZhbHVlOiBzdHJpbmcgPSBcImFcIikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB1cmw6IGAvP21ldGhvZD1mbGlja3IucGhvdG9zLnNlYXJjaCZ0ZXh0PSR7dmFsdWV9YCxcclxuICAgICAgICAgIHBhcmFtczogY29tbW9uUGFyYW1zLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IChyZXM6IElQaG90b3NSZXNwb25zZUpzb24pID0+IHtcclxuICAgICAgICBjb25zdCBhZGFwdGVkUmVzdWx0OiBJU2VhcmNoUmVzdWx0W10gPSBbXTtcclxuXHJcbiAgICAgICAgcmVzLnBob3Rvcy5waG90by5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGFkYXB0ZWRSZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgaW1hZ2VVcmw6IGBodHRwczovL2xpdmUuc3RhdGljZmxpY2tyLmNvbS8ke2l0ZW0uc2VydmVyfS8ke2l0ZW0uaWR9XyR7aXRlbS5zZWNyZXR9LmpwZ2AsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBhZGFwdGVkUmVzdWx0O1xyXG4gICAgICB9LFxyXG4gICAgICBwcm92aWRlc1RhZ3M6IFtcInNlYXJjaFJlc3VsdHNcIl1cclxuICAgIH0pLFxyXG5cclxuICAgIGdldE9uZVBpYzogYnVpbGQucXVlcnk8SVNlYXJjaFJlc3VsdCwgc3RyaW5nPih7XHJcbiAgICAgIHF1ZXJ5OiAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB1cmw6IGAvP3Bob3RvX2lkPSR7aWR9YCxcclxuICAgICAgICAgIHBhcmFtczogc2luZ2xlQ2FyZFBhcmFtcyxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzRGF0YTogSVBob3RvUmVzcG9uc2VKc29uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiByZXNEYXRhLnBob3RvLmlkLFxyXG4gICAgICAgICAgdGl0bGU6IHJlc0RhdGEucGhvdG8udGl0bGUuX2NvbnRlbnQsXHJcbiAgICAgICAgICBpbWFnZVVybDogYGh0dHBzOi8vbGl2ZS5zdGF0aWNmbGlja3IuY29tLyR7cmVzRGF0YS5waG90by5zZXJ2ZXJ9LyR7cmVzRGF0YS5waG90by5pZH1fJHtyZXNEYXRhLnBob3RvLnNlY3JldH0uanBnYCxcclxuICAgICAgICAgIGRhdGU6IHJlc0RhdGEucGhvdG8uZGF0ZXMucG9zdGVkLFxyXG4gICAgICAgICAgYXV0aG9yOiByZXNEYXRhLnBob3RvLm93bmVyLnJlYWxuYW1lLFxyXG4gICAgICAgICAgbG9jYXRpb246IHJlc0RhdGEucGhvdG8ub3duZXIubG9jYXRpb24sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0U2VhcmNoUmVzdWx0c1F1ZXJ5LCB1c2VHZXRPbmVQaWNRdWVyeSB9ID0gcGhvdG9BcGk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFTRSxTQUFTLEVBQUVDLGNBQWMsUUFBUSw4QkFBOEI7QUFDeEUsU0FBU0Msa0JBQWtCLEVBQUVDLG1CQUFtQixFQUFFQyxhQUFhLFFBQVEsbUJBQW1CO0FBRTFGLE1BQU1DLFlBQVksSUFBQVAsY0FBQSxHQUFBUSxDQUFBLE9BQUc7RUFDbkJDLE9BQU8sRUFBRSxrQ0FBa0M7RUFDM0NDLFFBQVEsRUFBRSxLQUFLO0VBQ2ZDLElBQUksRUFBRSxHQUFHO0VBQ1RDLE1BQU0sRUFBRSxNQUFNO0VBQ2RDLGNBQWMsRUFBRSxHQUFHO0VBQ25CQyxXQUFXLEVBQUU7QUFDZixDQUFDO0FBRUQsTUFBTUMsZ0JBQWdCLElBQUFmLGNBQUEsR0FBQVEsQ0FBQSxPQUFHO0VBQ3ZCQyxPQUFPLEVBQUUsa0NBQWtDO0VBQzNDRyxNQUFNLEVBQUUsTUFBTTtFQUNkQyxjQUFjLEVBQUUsR0FBRztFQUNuQkcsTUFBTSxFQUFFO0FBQ1YsQ0FBQztBQUVELE9BQU8sTUFBTUMsUUFBUSxJQUFBakIsY0FBQSxHQUFBUSxDQUFBLE9BQUdOLFNBQVMsQ0FBQztFQUNoQ2dCLFdBQVcsRUFBRSxLQUFLO0VBQ2xCQyxRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUM7RUFDM0JDLFNBQVMsRUFBRWpCLGNBQWMsQ0FBQztJQUFDa0IsT0FBTyxFQUFFO0VBQXNDLENBQUMsQ0FBQztFQUM1RUMsU0FBUyxFQUFHQyxLQUFLLElBQU07SUFBQXZCLGNBQUEsR0FBQXdCLENBQUE7SUFBQXhCLGNBQUEsR0FBQVEsQ0FBQTtJQUFBO01BQ3JCaUIsZ0JBQWdCLEVBQUVGLEtBQUssQ0FBQ0csS0FBSyxDQUFDcEIsYUFBYSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckRvQixLQUFLLEVBQUVBLENBQUNDLEtBQUssRUFBRSxNQUFNLElBQUEzQixjQUFBLEdBQUE0QixDQUFBLFVBQUcsR0FBRyxNQUFLO1VBQUE1QixjQUFBLEdBQUF3QixDQUFBO1VBQUF4QixjQUFBLEdBQUFRLENBQUE7VUFDOUIsT0FBTztZQUNMcUIsR0FBRyxFQUFHLHNDQUFxQ0YsS0FBTSxFQUFDO1lBQ2xERyxNQUFNLEVBQUV2QjtVQUNWLENBQUM7UUFDSCxDQUFDO1FBQ0R3QixpQkFBaUIsRUFBRUEsQ0FBQ0MsR0FBRyxFQUFFM0IsbUJBQW1CLEtBQUs7VUFBQUwsY0FBQSxHQUFBd0IsQ0FBQTtVQUMvQyxNQUFNUyxhQUFhLEVBQUUzQixhQUFhLEVBQUUsSUFBQU4sY0FBQSxHQUFBUSxDQUFBLE9BQUcsRUFBRTtVQUFDUixjQUFBLEdBQUFRLENBQUE7VUFFMUN3QixHQUFHLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLENBQUVDLElBQUksSUFBSztZQUFBckMsY0FBQSxHQUFBd0IsQ0FBQTtZQUFBeEIsY0FBQSxHQUFBUSxDQUFBO1lBQy9CeUIsYUFBYSxDQUFDSyxJQUFJLENBQUM7Y0FDakJDLEVBQUUsRUFBRUYsSUFBSSxDQUFDRSxFQUFFO2NBQ1hDLEtBQUssRUFBRUgsSUFBSSxDQUFDRyxLQUFLO2NBQ2pCQyxRQUFRLEVBQUcsaUNBQWdDSixJQUFJLENBQUNLLE1BQU8sSUFBR0wsSUFBSSxDQUFDRSxFQUFHLElBQUdGLElBQUksQ0FBQ00sTUFBTztZQUNuRixDQUFDLENBQUM7VUFDSixDQUFDLENBQUM7VUFBQzNDLGNBQUEsR0FBQVEsQ0FBQTtVQUVMLE9BQU95QixhQUFhO1FBQ3RCLENBQUM7UUFDRFcsWUFBWSxFQUFFLENBQUMsZUFBZTtNQUNoQyxDQUFDLENBQUM7TUFFRkMsU0FBUyxFQUFFdEIsS0FBSyxDQUFDRyxLQUFLLENBQUNwQixhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUNvQixLQUFLLEVBQUVBLENBQUNhLEVBQUUsRUFBRSxNQUFNLEtBQUs7VUFBQXZDLGNBQUEsR0FBQXdCLENBQUE7VUFBQXhCLGNBQUEsR0FBQVEsQ0FBQTtVQUNyQixPQUFPO1lBQ0xxQixHQUFHLEVBQUcsY0FBYVUsRUFBRyxFQUFDO1lBQ3ZCVCxNQUFNLEVBQUVmO1VBQ1YsQ0FBQztRQUNILENBQUM7UUFDRGdCLGlCQUFpQixFQUFFQSxDQUFDZSxPQUFPLEVBQUUxQyxrQkFBa0IsS0FBSztVQUFBSixjQUFBLEdBQUF3QixDQUFBO1VBQUF4QixjQUFBLEdBQUFRLENBQUE7VUFDbEQsT0FBTztZQUNMK0IsRUFBRSxFQUFFTyxPQUFPLENBQUNYLEtBQUssQ0FBQ0ksRUFBRTtZQUNwQkMsS0FBSyxFQUFFTSxPQUFPLENBQUNYLEtBQUssQ0FBQ0ssS0FBSyxDQUFDTyxRQUFRO1lBQ25DTixRQUFRLEVBQUcsaUNBQWdDSyxPQUFPLENBQUNYLEtBQUssQ0FBQ08sTUFBTyxJQUFHSSxPQUFPLENBQUNYLEtBQUssQ0FBQ0ksRUFBRyxJQUFHTyxPQUFPLENBQUNYLEtBQUssQ0FBQ1EsTUFBTyxNQUFLO1lBQ2pISyxJQUFJLEVBQUVGLE9BQU8sQ0FBQ1gsS0FBSyxDQUFDYyxLQUFLLENBQUNDLE1BQU07WUFDaENDLE1BQU0sRUFBRUwsT0FBTyxDQUFDWCxLQUFLLENBQUNpQixLQUFLLENBQUNDLFFBQVE7WUFDcENDLFFBQVEsRUFBRVIsT0FBTyxDQUFDWCxLQUFLLENBQUNpQixLQUFLLENBQUNFO1VBQ2hDLENBQUM7UUFDSDtNQUNGLENBQUM7SUFDSCxDQUFDO0VBQUQ7QUFDRixDQUFDLENBQUM7QUFFRixPQUFPLE1BQU07RUFBRUMsd0JBQXdCO0VBQUVDO0FBQWtCLENBQUMsSUFBQXhELGNBQUEsR0FBQVEsQ0FBQSxRQUFHUyxRQUFRIn0=