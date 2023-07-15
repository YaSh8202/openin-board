import { NextResponse } from "next/server";

const months = [
  "Jan - Feb 2023",
  "Feb - Mar 2023",
  "Mar - Apr 2023",
  "Apr - May 2023",
  "May - June 2023",
  "June - July 2023",
];

const user_activities = [
  [356, 198, 474, 279],
  [186, 462, 305, 136],
  [231, 412, 154, 488],
  [390, 129, 349, 274],
  [198, 456, 207, 410],
  [170, 496, 207, 489],
];

const guest_activities = [
  [270, 385, 131, 410],
  [349, 170, 496, 207],
  [489, 109, 421, 154],
  [488, 233, 456, 189],
  [270, 186, 389, 146],
  [462, 305, 136, 207],
];

export async function GET() {
  return NextResponse.json({
    months,
    user_activities,
    guest_activities,
  });
}
