function cov_2gjhmbq9fm() {
  var path = "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\mocks\\server.ts";
  var hash = "763076c48a34ac4ee027f1178b3d67bc15142703";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Olya\\Desktop\\RS School\\react-app\\react-ts-app\\src\\components\\mocks\\server.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 46
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "763076c48a34ac4ee027f1178b3d67bc15142703"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2gjhmbq9fm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2gjhmbq9fm();
import { setupServer } from "msw/node";
import { handlers } from "./handlers";
export const server = (cov_2gjhmbq9fm().s[0]++, setupServer(...handlers));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmdqaG1icTlmbSIsImFjdHVhbENvdmVyYWdlIiwic2V0dXBTZXJ2ZXIiLCJoYW5kbGVycyIsInNlcnZlciIsInMiXSwic291cmNlcyI6WyJzZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0dXBTZXJ2ZXJ9IGZyb20gXCJtc3cvbm9kZVwiXHJcbmltcG9ydCB7IGhhbmRsZXJzIH0gZnJvbSBcIi4vaGFuZGxlcnNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlciA9IHNldHVwU2VydmVyKC4uLmhhbmRsZXJzKTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLFNBQVNFLFdBQVcsUUFBTyxVQUFVO0FBQ3JDLFNBQVNDLFFBQVEsUUFBUSxZQUFZO0FBRXJDLE9BQU8sTUFBTUMsTUFBTSxJQUFBSixjQUFBLEdBQUFLLENBQUEsT0FBR0gsV0FBVyxDQUFDLEdBQUdDLFFBQVEsQ0FBQyJ9