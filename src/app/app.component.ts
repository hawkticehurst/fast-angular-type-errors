import { Component } from "@angular/core";
import { provideVSCodeDesignSystem, vsCodeButton } from "@vscode/webview-ui-toolkit";

provideVSCodeDesignSystem().register(vsCodeButton());

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "hello-world";

  handleClick() {
    console.log("Click!");
  }
}
