package com.thiendang.management.cleanarchitecture.ports.usecases.get.coursebyid;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class GetCourseRequest {
    private Integer courseID;
}
