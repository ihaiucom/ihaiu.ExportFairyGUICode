/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class TooltipsWin extends fairygui.GLabel {

		public n1:fairygui.GGraph;
		public title:fairygui.GTextField;

		public static URL:string = "ui://s1yj9w6mp7th3b";

		public static createInstance():TooltipsWin {
			return <TooltipsWin><any>(fairygui.UIPackage.createObject("BlackSkin","TooltipsWin"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n1 = <fairygui.GGraph><any>(this.getChild("n1"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}