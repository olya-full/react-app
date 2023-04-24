function cov_2hfwpc0xj2() {
  var path = "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\mocks\\handlers.ts";
  var hash = "fffeaec59ba2662b0d600ff24d4238c3040227d5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\mocks\\handlers.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 24
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 23,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 51
          },
          end: {
            line: 4,
            column: 52
          }
        },
        loc: {
          start: {
            line: 4,
            column: 83
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fffeaec59ba2662b0d600ff24d4238c3040227d5"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2hfwpc0xj2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2hfwpc0xj2();
import { rest } from "msw";
export const handlers = (cov_2hfwpc0xj2().s[0]++, [rest.get(`https://www.flickr.com/services/rest`, (request, response, context) => {
  cov_2hfwpc0xj2().f[0]++;
  cov_2hfwpc0xj2().s[1]++;
  return response(context.json({
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
        title: "Pen and pencil"
      }]
    },
    stat: "ok"
  }));
})]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmhmd3BjMHhqMiIsImFjdHVhbENvdmVyYWdlIiwicmVzdCIsImhhbmRsZXJzIiwicyIsImdldCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImNvbnRleHQiLCJmIiwianNvbiIsInBob3RvcyIsInBhZ2UiLCJwYWdlcyIsInBlcnBhZ2UiLCJ0b3RhbCIsInBob3RvIiwiaWQiLCJvd25lciIsInNlY3JldCIsInNlcnZlciIsInRpdGxlIiwic3RhdCJdLCJzb3VyY2VzIjpbImhhbmRsZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc3QgfSBmcm9tIFwibXN3XCJcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVycyA9IFtcclxuICByZXN0LmdldChgaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9zZXJ2aWNlcy9yZXN0YCwgKHJlcXVlc3QsIHJlc3BvbnNlLCBjb250ZXh0KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlKFxyXG4gICAgICBjb250ZXh0Lmpzb24oe1xyXG4gICAgICAgIHBob3Rvczoge1xyXG4gICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgIHBhZ2VzOiA0MixcclxuICAgICAgICAgIHBlcnBhZ2U6IDEwMCxcclxuICAgICAgICAgIHRvdGFsOiA0MTIzLFxyXG4gICAgICAgICAgcGhvdG86IFt7XHJcbiAgICAgICAgICAgIGlkOiBcIjUyNzUzOTA4NDc3XCIsXHJcbiAgICAgICAgICAgIG93bmVyOiBcIk1pY2hhZWxcIixcclxuICAgICAgICAgICAgc2VjcmV0OiBcIjk1MzMzZThmYzJcIixcclxuICAgICAgICAgICAgc2VydmVyOiBcIjM0MjM0MjM0XCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlBlbiBhbmQgcGVuY2lsXCIsXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXQ6IFwib2tcIixcclxuICAgICAgfSlcclxuICAgIClcclxuICB9KVxyXG5dIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLFNBQVNFLElBQUksUUFBUSxLQUFLO0FBRTFCLE9BQU8sTUFBTUMsUUFBUSxJQUFBSCxjQUFBLEdBQUFJLENBQUEsT0FBRyxDQUN0QkYsSUFBSSxDQUFDRyxHQUFHLENBQUUsc0NBQXFDLEVBQUUsQ0FBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sS0FBSztFQUFBUixjQUFBLEdBQUFTLENBQUE7RUFBQVQsY0FBQSxHQUFBSSxDQUFBO0VBRS9FLE9BQU9HLFFBQVEsQ0FDYkMsT0FBTyxDQUFDRSxJQUFJLENBQUM7SUFDWEMsTUFBTSxFQUFFO01BQ05DLElBQUksRUFBRSxDQUFDO01BQ1BDLEtBQUssRUFBRSxFQUFFO01BQ1RDLE9BQU8sRUFBRSxHQUFHO01BQ1pDLEtBQUssRUFBRSxJQUFJO01BQ1hDLEtBQUssRUFBRSxDQUFDO1FBQ05DLEVBQUUsRUFBRSxhQUFhO1FBQ2pCQyxLQUFLLEVBQUUsU0FBUztRQUNoQkMsTUFBTSxFQUFFLFlBQVk7UUFDcEJDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCQyxLQUFLLEVBQUU7TUFDVCxDQUFDO0lBQ0gsQ0FBQztJQUNEQyxJQUFJLEVBQUU7RUFDUixDQUFDLENBQUMsQ0FDSDtBQUNILENBQUMsQ0FBQyxDQUNIIn0=