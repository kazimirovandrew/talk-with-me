package com.green.talkwithme.server.service;

import com.green.talkwithme.ai.AiClient;
import com.green.talkwithme.dto.ChatRequest;
import com.green.talkwithme.dto.ChatResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ChatServiceImpl implements ChatService {

    private final AiClient aiClient;

    @Override
    public ChatResponse chat(ChatRequest chatRequest) {
        String aiMessage = aiClient.chat(chatRequest.getHumanMessage());
        return new ChatResponse().aiMessage(aiMessage);
    }
}
