/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class TabIconButton extends fairygui.GButton {

		public button:fairygui.Controller;
		public n5:fairygui.GImage;
		public n4:fairygui.GImage;
		public title:fairygui.GTextField;
		public icon:fairygui.GLoader;

		public static URL:string = "ui://s1yj9w6mp7th37";

		public static createInstance():TabIconButton {
			return <TabIconButton><any>(fairygui.UIPackage.createObject("BlackSkin","TabIconButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n5 = <fairygui.GImage><any>(this.getChild("n5"));
			this.n4 = <fairygui.GImage><any>(this.getChild("n4"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
			this.icon = <fairygui.GLoader><any>(this.getChild("icon"));
		}
	}
}