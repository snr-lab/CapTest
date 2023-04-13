import Foundation
import Capacitor

@objc(AppPlugins)
public class AppPlugins: CAPPlugin {
    @objc func test(_ call: CAPPluginCall) {
        let message: String = call.getString("message") ?? ""
        
        var response: [String: Any] = [:]
        response["platform"] = "ios"
        response["message"] = message
        
        call.resolve(response)
    }
}
