/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class PopupMenu1_item extends fairygui.GButton {

		public button:fairygui.Controller;
		public checked:fairygui.Controller;
		public n1:fairygui.GImage;
		public n2:fairygui.GImage;
		public title:fairygui.GTextField;

		public static URL:string = "ui://snq31xvrsfsc48";

		public static createInstance():PopupMenu1_item {
			return <PopupMenu1_item><any>(fairygui.UIPackage.createObject("UIDefaultSkin","PopupMenu1_item"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.checked = this.getController("checked");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}