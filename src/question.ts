const alphabet: string[] = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

export default class Questions {
    /** 問題数 */
    numOfQuestions: number;
    /** 問題文 */
    question: string;
    /** 現在が何問目か */
    selfNumber: number;

    /**
     * constructor
     * @param qnum 問題数
     */
    constructor(qnum: number) {
        this.numOfQuestions = qnum;
    }
    /**
     * 初期化する
     */
    public init(): string {
        this.question = "";
        this.selfNumber = 0;
        for(let i = 0;i < this.numOfQuestions;i++)
            this.question += alphabet[Math.round(Math.random()*25)];
        return this.question;
    }

    /**
     * メイン処理
     * @param inputKey 入力されたアルファベット
     */
    public main(inputKey: string): string | boolean {
        if(this.question.charAt(0) === inputKey){
            this.selfNumber++;
            if (this.selfNumber < this.numOfQuestions) {
                this.question = this.question.slice(1, this.question.length);
                return this.question;
            } else {
                return "終了します\nリセットボタンを押してください";
            }
        }
        return false;
    }
}