package com.jvaas.controller;

import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class JavaScriptErrorController {

    final private Logger log = LoggerFactory.getLogger(JavaScriptErrorController.class);
    final private Gson gson = new Gson();

    @ResponseBody
    @RequestMapping(value = "/error", method = RequestMethod.POST)
    public String syncShopSurvey(@RequestBody String json) {

        log.error(json);

        // TODO: gson.fromJson(json, JSError.class);

        return "ok";

    }


}
