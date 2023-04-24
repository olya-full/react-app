function cov_14dlw2kl0i() {
  var path = "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\Store\\Slices\\createdCardsSlice.ts";
  var hash = "5c7fbdf665c5fb910a7138aabac10718a8e4a0ce";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\Store\\Slices\\createdCardsSlice.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 33
        },
        end: {
          line: 18,
          column: 2
        }
      },
      "1": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 39
        }
      },
      "2": {
        start: {
          line: 20,
          column: 30
        },
        end: {
          line: 20,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 16
          },
          end: {
            line: 14,
            column: 17
          }
        },
        loc: {
          start: {
            line: 14,
            column: 60
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5c7fbdf665c5fb910a7138aabac10718a8e4a0ce"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_14dlw2kl0i = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_14dlw2kl0i();
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewCard } from "../../../types/types";
export interface ICreatedCardsState {
  cards: INewCard[];
}
export const createdCardsSlice = (cov_14dlw2kl0i().s[0]++, createSlice({
  name: "createdCards",
  initialState: ({
    cards: []
  } as ICreatedCardsState),
  reducers: {
    addNewCard: (state, action: PayloadAction<INewCard>) => {
      cov_14dlw2kl0i().f[0]++;
      cov_14dlw2kl0i().s[1]++;
      state.cards.push(action.payload);
    }
  }
}));
export const {
  addNewCard
} = (cov_14dlw2kl0i().s[2]++, createdCardsSlice.actions);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTRkbHcya2wwaSIsImFjdHVhbENvdmVyYWdlIiwiY3JlYXRlU2xpY2UiLCJQYXlsb2FkQWN0aW9uIiwiSU5ld0NhcmQiLCJJQ3JlYXRlZENhcmRzU3RhdGUiLCJjYXJkcyIsImNyZWF0ZWRDYXJkc1NsaWNlIiwicyIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImFkZE5ld0NhcmQiLCJzdGF0ZSIsImFjdGlvbiIsImYiLCJwdXNoIiwicGF5bG9hZCIsImFjdGlvbnMiXSwic291cmNlcyI6WyJjcmVhdGVkQ2FyZHNTbGljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IElOZXdDYXJkIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDcmVhdGVkQ2FyZHNTdGF0ZSB7XHJcbiAgY2FyZHM6IElOZXdDYXJkW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVkQ2FyZHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImNyZWF0ZWRDYXJkc1wiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgY2FyZHM6IFtdLFxyXG4gIH0gYXMgSUNyZWF0ZWRDYXJkc1N0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBhZGROZXdDYXJkOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJTmV3Q2FyZD4pID0+IHtcclxuICAgICAgc3RhdGUuY2FyZHMucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgYWRkTmV3Q2FyZCB9ID0gY3JlYXRlZENhcmRzU2xpY2UuYWN0aW9ucztcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosU0FBU0UsV0FBVyxFQUFFQyxhQUFhLFFBQVEsa0JBQWtCO0FBQzdELFNBQVNDLFFBQVEsUUFBUSxzQkFBc0I7QUFFL0MsT0FBTyxVQUFVQyxrQkFBa0IsQ0FBQztFQUNsQ0MsS0FBSyxFQUFFRixRQUFRLEVBQUU7QUFDbkI7QUFFQSxPQUFPLE1BQU1HLGlCQUFpQixJQUFBUCxjQUFBLEdBQUFRLENBQUEsT0FBR04sV0FBVyxDQUFDO0VBQzNDTyxJQUFJLEVBQUUsY0FBYztFQUNwQkMsWUFBWSxHQUFFO0lBQ1pKLEtBQUssRUFBRTtFQUNULENBQUMsSUFBSUQsa0JBQWtCO0VBQ3ZCTSxRQUFRLEVBQUU7SUFDUkMsVUFBVSxFQUFFQSxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sRUFBRVgsYUFBYSxDQUFDQyxRQUFRLENBQUMsS0FBSztNQUFBSixjQUFBLEdBQUFlLENBQUE7TUFBQWYsY0FBQSxHQUFBUSxDQUFBO01BQ3RESyxLQUFLLENBQUNQLEtBQUssQ0FBQ1UsSUFBSSxDQUFDRixNQUFNLENBQUNHLE9BQU8sQ0FBQztJQUNsQztFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsT0FBTyxNQUFNO0VBQUVMO0FBQVcsQ0FBQyxJQUFBWixjQUFBLEdBQUFRLENBQUEsT0FBR0QsaUJBQWlCLENBQUNXLE9BQU8ifQ==