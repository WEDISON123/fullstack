export interface ChatMessage {
    // openAI 文本AI
    // 3 种角色     system 系统     assistant 助理     user 用户
    // ts 联合类型 类型推导
    role: "user" | "assistant" | "system";
    content: string;
}