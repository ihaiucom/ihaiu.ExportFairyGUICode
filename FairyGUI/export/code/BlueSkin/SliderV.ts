/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class SliderV extends fairygui.GSlider {

		public n1:fairygui.GImage;
		public bar_v:fairygui.GImage;
		public grip:Button_icon;

		public static URL:string = "ui://stv9j6m6raoc1g";

		public static createInstance():SliderV {
			return <SliderV><any>(fairygui.UIPackage.createObject("BlueSkin","SliderV"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.bar_v = <fairygui.GImage><any>(this.getChild("bar_v"));
			this.grip = <Button_icon><any>(this.getChild("grip"));
		}
	}
}