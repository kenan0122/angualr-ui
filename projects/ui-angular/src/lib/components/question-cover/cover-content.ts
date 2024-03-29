import { deepClone } from "@psylab/utils";
interface ICoverContent {
  version: number;
}

export interface ICoverContentV1 extends ICoverContent {
  instruction: string;
  questions: ICoverQuestionContent[];
  styleType: CoverQuestionType;
}

interface ICoverQuestionContent {
  type: CoverQuestionType;
  // 题干
  stem: string;
  singleChoice: ICoverSingleContent;
  scale: ICoverScaleContent;
}

interface ICoverSingleContent {
  options: OptionText[];
  // 选中项
  index: number;
}

interface OptionText {
  text: string;
}

interface ICoverScaleContent {
  /**显示5个星星, value值: 0-4 */
  value: number;
  options: OptionText[];
}

export enum CoverQuestionType {
  // 单选
  SingleChoice,
  // 量表
  Scale
}

export function createDefaultCoverContent(version:number = 1): ICoverContent {
  const question:ICoverQuestionContent  = {
    type: CoverQuestionType.Scale,
    stem: '',
    scale: {
      options: [{text: ''},{text: ''}],
      value: -1
    },
    singleChoice: {
      options: [{text: ''},{text: ''}],
      index: -1
    }
  };

  return {
    version: version,
    styleType: CoverQuestionType.Scale,
    instruction: '',
    questions: [
      question,
      deepClone(question)
    ]
  } as ICoverContent;
}
