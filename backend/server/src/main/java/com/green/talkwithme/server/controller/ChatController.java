package com.green.talkwithme.server.controller;

import com.green.talkwithme.api.ChatApi;
import com.green.talkwithme.dto.ChatRequest;
import com.green.talkwithme.dto.ChatResponse;
import com.green.talkwithme.server.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class ChatController implements ChatApi {

    private final ChatService chatService;

    @Override
    public ResponseEntity<ChatResponse> chat(ChatRequest chatRequest) {
        return ResponseEntity.ok(chatService.chat(chatRequest));
    }
}
