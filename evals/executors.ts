import { generateText, stepCountIs, tool, type ToolSet } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

import type {
  EvalData,
  SingleTurnResult,
  MultiTurnEvalData,
  MultiTurnResult,
} from "./types.ts";

const TOOL_DEFINITIONS = {
  readFile: {
    description: 'Read the contents of a file at the specified path',
  },
  writeFile: {},
  listFiles: {},
  deleteFile: {},
  runCommand: {},
}