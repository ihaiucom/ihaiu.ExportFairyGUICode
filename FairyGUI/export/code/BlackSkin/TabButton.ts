/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class TabButton extends fairygui.GButton {

		public button:fairygui.Controller;
		public n4:fairygui.GImage;
		public n5:fairygui.GImage;
		public title:fairygui.GTextField;

		public static URL:string = "ui://s1yj9w6mp7th36";

		public static createInstance():TabButton {
			return <TabButton><any>(fairygui.UIPackage.createObject("BlackSkin","TabButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n4 = <fairygui.GImage><any>(this.getChild("n4"));
			this.n5 = <fairygui.GImage><any>(this.getChild("n5"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}