package com.cap.test;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.content.Context;
import android.util.Log;

@CapacitorPlugin(name = "AppPlugins")
public class AppPlugins extends Plugin {
    @PluginMethod()
    public void test(PluginCall call){
        Context context = bridge.getContext();
        String message = call.getString("message", "");

        JSObject response = new JSObject();
        response.put("platform", "android");
        response.put("message", message);

        call.resolve(response);
    }
}