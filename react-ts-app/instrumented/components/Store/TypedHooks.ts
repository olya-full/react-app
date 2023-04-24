function cov_pjt84z4yh() {
  var path = "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\Store\\TypedHooks.ts";
  var hash = "4bd36959f41060863ff4c08120845541e3533caf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\Store\\TypedHooks.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 45
        },
        end: {
          line: 7,
          column: 56
        }
      },
      "1": {
        start: {
          line: 8,
          column: 64
        },
        end: {
          line: 8,
          column: 75
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4bd36959f41060863ff4c08120845541e3533caf"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_pjt84z4yh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_pjt84z4yh();
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IRootState, IRootDispatch } from "./Store";
type IDispatchFunc = () => IRootDispatch;
export const useAppDispatch: IDispatchFunc = (cov_pjt84z4yh().s[0]++, useDispatch);
export const useAppSelector: TypedUseSelectorHook<IRootState> = (cov_pjt84z4yh().s[1]++, useSelector);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfcGp0ODR6NHloIiwiYWN0dWFsQ292ZXJhZ2UiLCJUeXBlZFVzZVNlbGVjdG9ySG9vayIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJJUm9vdFN0YXRlIiwiSVJvb3REaXNwYXRjaCIsIklEaXNwYXRjaEZ1bmMiLCJ1c2VBcHBEaXNwYXRjaCIsInMiLCJ1c2VBcHBTZWxlY3RvciJdLCJzb3VyY2VzIjpbIlR5cGVkSG9va3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgSVJvb3RTdGF0ZSwgSVJvb3REaXNwYXRjaCB9IGZyb20gXCIuL1N0b3JlXCI7XHJcblxyXG50eXBlIElEaXNwYXRjaEZ1bmMgPSAoKSA9PiBJUm9vdERpc3BhdGNoO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoOiBJRGlzcGF0Y2hGdW5jID0gdXNlRGlzcGF0Y2g7XHJcbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8SVJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvcjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsYUFBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsYUFBQTtBQWZaLFNBQVNFLG9CQUFvQixFQUFFQyxXQUFXLEVBQUVDLFdBQVcsUUFBUSxhQUFhO0FBRTVFLFNBQVNDLFVBQVUsRUFBRUMsYUFBYSxRQUFRLFNBQVM7QUFFbkQsS0FBS0MsYUFBYSxHQUFHLE1BQU1ELGFBQWE7QUFFeEMsT0FBTyxNQUFNRSxjQUFjLEVBQUVELGFBQWEsSUFBQVAsYUFBQSxHQUFBUyxDQUFBLE9BQUdOLFdBQVc7QUFDeEQsT0FBTyxNQUFNTyxjQUFjLEVBQUVSLG9CQUFvQixDQUFDRyxVQUFVLENBQUMsSUFBQUwsYUFBQSxHQUFBUyxDQUFBLE9BQUdMLFdBQVcifQ==