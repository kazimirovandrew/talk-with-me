package com.green.talkwithme.server.service;

import com.green.talkwithme.dto.ChatRequest;
import com.green.talkwithme.dto.ChatResponse;

public interface ChatService {
    ChatResponse chat(ChatRequest chatRequest);
}
