package com.youthvision.erp.userservice;

import com.youthvision.erp.userservice.config.AsyncSyncConfiguration;
import com.youthvision.erp.userservice.config.EmbeddedSQL;
import com.youthvision.erp.userservice.config.JacksonConfiguration;
import com.youthvision.erp.userservice.config.TestSecurityConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(
    classes = { UserserviceApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class, TestSecurityConfiguration.class }
)
@EmbeddedSQL
public @interface IntegrationTest {
}
