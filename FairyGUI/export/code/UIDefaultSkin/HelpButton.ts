/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class HelpButton extends fairygui.GButton {

		public button:fairygui.Controller;
		public icon:fairygui.GImage;

		public static URL:string = "ui://snq31xvrraoc3o";

		public static createInstance():HelpButton {
			return <HelpButton><any>(fairygui.UIPackage.createObject("UIDefaultSkin","HelpButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.icon = <fairygui.GImage><any>(this.getChild("icon"));
		}
	}
}