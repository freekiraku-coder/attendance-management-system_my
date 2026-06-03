package com.attendance.backend.dto;

public record LoginRequest(
        String username,
        String password
) {
}