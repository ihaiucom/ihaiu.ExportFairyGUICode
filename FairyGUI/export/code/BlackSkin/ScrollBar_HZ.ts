/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class ScrollBar_HZ extends fairygui.GScrollBar {

		public n0:fairygui.GImage;
		public bar:fairygui.GGraph;
		public grip:GripButton_HZ;
		public arrow2:ScrollRightButton;
		public arrow1:ScrollLeftButton;

		public static URL:string = "ui://s1yj9w6mp7th30";

		public static createInstance():ScrollBar_HZ {
			return <ScrollBar_HZ><any>(fairygui.UIPackage.createObject("BlackSkin","ScrollBar_HZ"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.bar = <fairygui.GGraph><any>(this.getChild("bar"));
			this.grip = <GripButton_HZ><any>(this.getChild("grip"));
			this.arrow2 = <ScrollRightButton><any>(this.getChild("arrow2"));
			this.arrow1 = <ScrollLeftButton><any>(this.getChild("arrow1"));
		}
	}
}