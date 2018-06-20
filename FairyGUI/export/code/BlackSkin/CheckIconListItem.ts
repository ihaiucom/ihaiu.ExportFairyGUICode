/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class CheckIconListItem extends fairygui.GButton {

		public button:fairygui.Controller;
		public n4:fairygui.GImage;
		public n8:fairygui.GImage;
		public title:fairygui.GTextField;
		public icon:fairygui.GLoader;

		public static URL:string = "ui://s1yj9w6mp7th2p";

		public static createInstance():CheckIconListItem {
			return <CheckIconListItem><any>(fairygui.UIPackage.createObject("BlackSkin","CheckIconListItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n4 = <fairygui.GImage><any>(this.getChild("n4"));
			this.n8 = <fairygui.GImage><any>(this.getChild("n8"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
			this.icon = <fairygui.GLoader><any>(this.getChild("icon"));
		}
	}
}