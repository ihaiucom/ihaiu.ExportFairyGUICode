/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class ComProgressBar extends fairygui.GProgressBar {

		public n1:fairygui.GImage;
		public bar:fairygui.GImage;
		public title:fairygui.GTextField;

		public static URL:string = "ui://snq31xvrsfsc45";

		public static createInstance():ComProgressBar {
			return <ComProgressBar><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComProgressBar"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.bar = <fairygui.GImage><any>(this.getChild("bar"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}