const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;


const InputView = {

  validateBridge(bridgeInput, reject) {
    if (Number.isNaN(bridgeInput)) reject(new Error("[ERROR] 다리길이는 숫자여야 합니다."));
    if (!(3 <= bridgeInput && bridgeInput <= 20)) reject(new Error("[ERROR] 다리길이는 3에서 20사이의 숫자여야 합니다."));
  },

  readBridgeSize() {
    return new Promise((resolve, reject) => {
      Console.readLine("다리의 길이를 입력해주세요.\n", (inputString) => {
        const inputNum = parseInt(inputString);
        this.validateBridge(inputNum,reject);
        resolve(inputNum);
      });
    })
  },

  validateMove(move, reject){
    if(!(move === "U" || move ==="D")) reject(new Error("[ERROR] 이동할 칸을 잘못 입력하셨습니다."));  
  },


  readMoving() {
    return new Promise((resolve, reject) => {
      Console.readLine("\n이동할 칸을 선택해주세요. (위:U, 아래:D)\n", (inputMove) => {
        this.validateMove(inputMove, reject);
        resolve(inputMove);
      });
    })
  },

  validateStart(start, reject){
    if(!(start === "R" || start ==="Q")) reject(new Error("[ERROR] 다시시도 여부를 잘못 입력하셨습니다."));  
  },

  readGameCommand(){
    return new Promise((resolve, reject) => {
      Console.readLine("\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (restart) => {
        this.validateStart(restart, reject);
        resolve(restart);
      });
    })
   },
};

module.exports = InputView;
