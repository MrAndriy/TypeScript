interface Rectangle {
  id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rec1: Rectangle = {
  id: '1234',
  size: {
    width: 20,
    height: 30,
  },
};
rec1.color = 'black';

const rect2 = {} as Rectangle;

const rect3 = <Rectangle>{
  id: '123',
  size: {
    width: 20,
    height: 20,
  },
};

// ===============

interface RectWithArea extends Rectangle {
  getArea: () => number;
}

const rect4: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

// ===============

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}

// ===============

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px',
};
 