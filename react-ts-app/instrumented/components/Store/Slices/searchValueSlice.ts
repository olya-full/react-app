function cov_cgdxyw6ax() {
  var path = "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\Store\\Slices\\searchValueSlice.ts";
  var hash = "d5c96971d9c5df94faca574157d599bab25bcb2d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\Store\\Slices\\searchValueSlice.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 32
        },
        end: {
          line: 13,
          column: 2
        }
      },
      "1": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 35
        }
      },
      "2": {
        start: {
          line: 15,
          column: 35
        },
        end: {
          line: 15,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 23
          },
          end: {
            line: 9,
            column: 24
          }
        },
        loc: {
          start: {
            line: 9,
            column: 65
          },
          end: {
            line: 11,
            column: 5
          }
        },
        line: 9
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
    hash: "d5c96971d9c5df94faca574157d599bab25bcb2d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_cgdxyw6ax = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_cgdxyw6ax();
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export const searchValueSlice = (cov_cgdxyw6ax().s[0]++, createSlice({
  name: "searchValue",
  initialState: {
    value: ""
  },
  reducers: {
    updateSearchValue: (state, action: PayloadAction<string>) => {
      cov_cgdxyw6ax().f[0]++;
      cov_cgdxyw6ax().s[1]++;
      state.value = action.payload;
    }
  }
}));
export const {
  updateSearchValue
} = (cov_cgdxyw6ax().s[2]++, searchValueSlice.actions);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfY2dkeHl3NmF4IiwiYWN0dWFsQ292ZXJhZ2UiLCJQYXlsb2FkQWN0aW9uIiwiY3JlYXRlU2xpY2UiLCJzZWFyY2hWYWx1ZVNsaWNlIiwicyIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsInJlZHVjZXJzIiwidXBkYXRlU2VhcmNoVmFsdWUiLCJzdGF0ZSIsImFjdGlvbiIsImYiLCJwYXlsb2FkIiwiYWN0aW9ucyJdLCJzb3VyY2VzIjpbInNlYXJjaFZhbHVlU2xpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaFZhbHVlU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJzZWFyY2hWYWx1ZVwiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgIHZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHVwZGF0ZVNlYXJjaFZhbHVlOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnZhbHVlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHt1cGRhdGVTZWFyY2hWYWx1ZX0gPSBzZWFyY2hWYWx1ZVNsaWNlLmFjdGlvbnM7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBZlosU0FBU0UsYUFBYSxFQUFFQyxXQUFXLFFBQVEsa0JBQWtCO0FBRTdELE9BQU8sTUFBTUMsZ0JBQWdCLElBQUFKLGFBQUEsR0FBQUssQ0FBQSxPQUFHRixXQUFXLENBQUM7RUFDMUNHLElBQUksRUFBRSxhQUFhO0VBQ25CQyxZQUFZLEVBQUU7SUFDWEMsS0FBSyxFQUFFO0VBQ1YsQ0FBQztFQUNEQyxRQUFRLEVBQUU7SUFDUkMsaUJBQWlCLEVBQUVBLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFVixhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUs7TUFBQUYsYUFBQSxHQUFBYSxDQUFBO01BQUFiLGFBQUEsR0FBQUssQ0FBQTtNQUMzRE0sS0FBSyxDQUFDSCxLQUFLLEdBQUdJLE1BQU0sQ0FBQ0UsT0FBTztJQUM5QjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsT0FBTyxNQUFNO0VBQUNKO0FBQWlCLENBQUMsSUFBQVYsYUFBQSxHQUFBSyxDQUFBLE9BQUdELGdCQUFnQixDQUFDVyxPQUFPIn0=