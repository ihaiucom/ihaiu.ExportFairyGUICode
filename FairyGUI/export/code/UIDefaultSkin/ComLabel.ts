/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class ComLabel extends fairygui.GLabel {

		public title:fairygui.GTextField;
		public icon:fairygui.GImage;

		public static URL:string = "ui://snq31xvrsfsc3x";

		public static createInstance():ComLabel {
			return <ComLabel><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComLabel"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.title = <fairygui.GTextField><any>(this.getChild("title"));
			this.icon = <fairygui.GImage><any>(this.getChild("icon"));
		}
	}
}