package com.attendance.backend.controller;

import com.attendance.backend.dto.LoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")

public class AuthController {
    
    @PostMapping("/login")
    public ResponseEntity<String> login(
            @RequestBody LoginRequest request) {

        if ("admin".equals(request.username())
                && "password".equals(request.password())) {

            return ResponseEntity.ok("ログイン成功");
        }

        return ResponseEntity.badRequest()
                .body("ユーザー名またはパスワードが違います");
    }

    @GetMapping("/test")
    public String test() {
        return "AuthController OK";
    }
}
