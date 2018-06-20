/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class RedButton extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public n2:fairygui.GImage;
		public title:fairygui.GTextField;
		public icon:fairygui.GImage;

		public static URL:string = "ui://snq31xvrraoc3n";

		public static createInstance():RedButton {
			return <RedButton><any>(fairygui.UIPackage.createObject("UIDefaultSkin","RedButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
			this.icon = <fairygui.GImage><any>(this.getChild("icon"));
		}
	}
}