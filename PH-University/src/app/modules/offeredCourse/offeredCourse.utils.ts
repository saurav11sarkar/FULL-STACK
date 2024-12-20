import { Days } from './offerCourse.interface';

export type TSchedule = {
  days: Days[];
  startTime: string;
  endTime: string;
};

export const hasTimeConflict = (
  assignedSchedule: TSchedule[],
  newSchedule: TSchedule,
) => {
  for (const schedule of assignedSchedule) {
    const existStartTime = new Date(`1970-01-01T${schedule.startTime}`);
    const existEndTime = new Date(`1970-01-01T${schedule.endTime}`);
    const newStartTime = new Date(`1970-01-01T${newSchedule.startTime}`);
    const newEndTime = new Date(`1970-01-01T${newSchedule.endTime}`);

    if (newStartTime < existEndTime && newEndTime > existStartTime) {
      return true;
    }
  }

  return false;
};
