/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class ScrollBar_arrow extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public n2:fairygui.GImage;
		public icon:fairygui.GLoader;

		public static URL:string = "ui://stv9j6m6raoc3";

		public static createInstance():ScrollBar_arrow {
			return <ScrollBar_arrow><any>(fairygui.UIPackage.createObject("BlueSkin","ScrollBar_arrow"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.icon = <fairygui.GLoader><any>(this.getChild("icon"));
		}
	}
}