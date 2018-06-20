/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class PopupMenuItem extends fairygui.GButton {

		public button:fairygui.Controller;
		public n2:fairygui.GGraph;
		public title:fairygui.GTextField;

		public static URL:string = "ui://s1yj9w6mp7th2r";

		public static createInstance():PopupMenuItem {
			return <PopupMenuItem><any>(fairygui.UIPackage.createObject("BlackSkin","PopupMenuItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n2 = <fairygui.GGraph><any>(this.getChild("n2"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}