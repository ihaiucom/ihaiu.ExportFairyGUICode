/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class ScrollBarV extends fairygui.GScrollBar {

		public n1:fairygui.GImage;
		public bar:fairygui.GGraph;
		public arrow1:ScrollBar_arrow;
		public arrow2:ScrollBar_arrow;
		public grip:ScrollBar_grip;

		public static URL:string = "ui://stv9j6m6raoc1n";

		public static createInstance():ScrollBarV {
			return <ScrollBarV><any>(fairygui.UIPackage.createObject("BlueSkin","ScrollBarV"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.bar = <fairygui.GGraph><any>(this.getChild("bar"));
			this.arrow1 = <ScrollBar_arrow><any>(this.getChild("arrow1"));
			this.arrow2 = <ScrollBar_arrow><any>(this.getChild("arrow2"));
			this.grip = <ScrollBar_grip><any>(this.getChild("grip"));
		}
	}
}