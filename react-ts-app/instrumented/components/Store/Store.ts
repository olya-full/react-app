function cov_jznwv3dub() {
  var path = "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\Store\\Store.ts";
  var hash = "1246843084167433dac5b6abeedf5ffdf485b5d9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\Store\\Store.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 13,
          column: 2
        }
      },
      "1": {
        start: {
          line: 12,
          column: 40
        },
        end: {
          line: 12,
          column: 90
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 14
          },
          end: {
            line: 12,
            column: 15
          }
        },
        loc: {
          start: {
            line: 12,
            column: 40
          },
          end: {
            line: 12,
            column: 90
          }
        },
        line: 12
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
    hash: "1246843084167433dac5b6abeedf5ffdf485b5d9"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_jznwv3dub = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_jznwv3dub();
import { configureStore } from "@reduxjs/toolkit";
import { createdCardsSlice } from "./Slices/createdCardsSlice";
import { searchValueSlice } from "./Slices/searchValueSlice";
import { photoApi } from "./PhotoApi";
export const store = (cov_jznwv3dub().s[0]++, configureStore({
  reducer: {
    createdCards: createdCardsSlice.reducer,
    searchValue: searchValueSlice.reducer,
    [photoApi.reducerPath]: photoApi.reducer
  },
  middleware: getDeafultMiddleware => {
    cov_jznwv3dub().f[0]++;
    cov_jznwv3dub().s[1]++;
    return getDeafultMiddleware().concat(photoApi.middleware);
  }
}));
export type IRootState = ReturnType<typeof store.getState>;
export type IRootDispatch = typeof store.dispatch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3Zfanpud3YzZHViIiwiYWN0dWFsQ292ZXJhZ2UiLCJjb25maWd1cmVTdG9yZSIsImNyZWF0ZWRDYXJkc1NsaWNlIiwic2VhcmNoVmFsdWVTbGljZSIsInBob3RvQXBpIiwic3RvcmUiLCJzIiwicmVkdWNlciIsImNyZWF0ZWRDYXJkcyIsInNlYXJjaFZhbHVlIiwicmVkdWNlclBhdGgiLCJtaWRkbGV3YXJlIiwiZ2V0RGVhZnVsdE1pZGRsZXdhcmUiLCJmIiwiY29uY2F0IiwiSVJvb3RTdGF0ZSIsIlJldHVyblR5cGUiLCJnZXRTdGF0ZSIsIklSb290RGlzcGF0Y2giLCJkaXNwYXRjaCJdLCJzb3VyY2VzIjpbIlN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgY3JlYXRlZENhcmRzU2xpY2UgfSBmcm9tIFwiLi9TbGljZXMvY3JlYXRlZENhcmRzU2xpY2VcIjtcclxuaW1wb3J0IHsgc2VhcmNoVmFsdWVTbGljZSB9IGZyb20gXCIuL1NsaWNlcy9zZWFyY2hWYWx1ZVNsaWNlXCI7XHJcbmltcG9ydCB7IHBob3RvQXBpIH0gZnJvbSBcIi4vUGhvdG9BcGlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBjcmVhdGVkQ2FyZHM6IGNyZWF0ZWRDYXJkc1NsaWNlLnJlZHVjZXIsXHJcbiAgICBzZWFyY2hWYWx1ZTogc2VhcmNoVmFsdWVTbGljZS5yZWR1Y2VyLFxyXG4gICAgW3Bob3RvQXBpLnJlZHVjZXJQYXRoXTogcGhvdG9BcGkucmVkdWNlcixcclxuICB9LFxyXG4gIG1pZGRsZXdhcmU6IChnZXREZWFmdWx0TWlkZGxld2FyZSkgPT4gZ2V0RGVhZnVsdE1pZGRsZXdhcmUoKS5jb25jYXQocGhvdG9BcGkubWlkZGxld2FyZSksXHJcbn0pXHJcblxyXG5leHBvcnQgdHlwZSBJUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xyXG5leHBvcnQgdHlwZSBJUm9vdERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBZlosU0FBU0UsY0FBYyxRQUFRLGtCQUFrQjtBQUNqRCxTQUFTQyxpQkFBaUIsUUFBUSw0QkFBNEI7QUFDOUQsU0FBU0MsZ0JBQWdCLFFBQVEsMkJBQTJCO0FBQzVELFNBQVNDLFFBQVEsUUFBUSxZQUFZO0FBRXJDLE9BQU8sTUFBTUMsS0FBSyxJQUFBTixhQUFBLEdBQUFPLENBQUEsT0FBR0wsY0FBYyxDQUFDO0VBQ2xDTSxPQUFPLEVBQUU7SUFDUEMsWUFBWSxFQUFFTixpQkFBaUIsQ0FBQ0ssT0FBTztJQUN2Q0UsV0FBVyxFQUFFTixnQkFBZ0IsQ0FBQ0ksT0FBTztJQUNyQyxDQUFDSCxRQUFRLENBQUNNLFdBQVcsR0FBR04sUUFBUSxDQUFDRztFQUNuQyxDQUFDO0VBQ0RJLFVBQVUsRUFBR0Msb0JBQW9CLElBQUs7SUFBQWIsYUFBQSxHQUFBYyxDQUFBO0lBQUFkLGFBQUEsR0FBQU8sQ0FBQTtJQUFBLE9BQUFNLG9CQUFvQixFQUFFLENBQUNFLE1BQU0sQ0FBQ1YsUUFBUSxDQUFDTyxVQUFVLENBQUM7RUFBRDtBQUN6RixDQUFDLENBQUM7QUFFRixPQUFPLEtBQUtJLFVBQVUsR0FBR0MsVUFBVSxDQUFDLE9BQU9YLEtBQUssQ0FBQ1ksUUFBUSxDQUFDO0FBQzFELE9BQU8sS0FBS0MsYUFBYSxHQUFHLE9BQU9iLEtBQUssQ0FBQ2MsUUFBUSJ9