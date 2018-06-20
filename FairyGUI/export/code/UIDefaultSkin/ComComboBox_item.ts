/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class ComComboBox_item extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public n2:fairygui.GImage;
		public n3:fairygui.GImage;
		public n4:fairygui.GImage;
		public title:fairygui.GTextField;

		public static URL:string = "ui://snq31xvrsfsc3y";

		public static createInstance():ComComboBox_item {
			return <ComComboBox_item><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComComboBox_item"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.n3 = <fairygui.GImage><any>(this.getChild("n3"));
			this.n4 = <fairygui.GImage><any>(this.getChild("n4"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}