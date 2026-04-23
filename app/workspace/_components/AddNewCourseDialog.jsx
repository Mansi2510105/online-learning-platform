import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog"
import { Input } from '../../../components/ui/input'
import { Switch } from '../../../components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"
import { Loader2Icon, Sparkle } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Textarea } from '../../../components/ui/textarea'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner' // or wherever your toast comes from

function AddNewCourseDialog({ children }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    includeVideo: false,
    noOfChapters: 1,
    category: '',
    level: ''
  });
  const router = useRouter();

  const onHandleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const onGenerate = async () => {
    console.log("Submitting formData:", formData);
    const courseId = uuidv4();
    try {
      setLoading(true);
      const result = await axios.post('/api/generate-course-layout', {
        ...formData,
        courseId: courseId
      });
      console.log("Response:", result.data);
      setLoading(false);

      // Redirect to edit page after successful save
      router.push('/workspace/edit-course/' + result.data?.courseId);

    } catch (e) {
      setLoading(false);
      console.error("Error generating course:", e);
      // toast.error("Failed to generate course. Please try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      {/* 1. Added max-w and h-full logic for mobile */}
      <DialogContent className="sm:max-w-[500px] w-[95%] max-h-[90vh] overflow-hidden flex flex-col rounded-2xl">
        <DialogHeader>
          <DialogTitle>Create New Course Using AI</DialogTitle>
          {/* 2. Added overflow-y-auto to the container to allow scrolling on small screens */}
          <DialogDescription asChild>
            <div className='flex flex-col gap-4 mt-3 overflow-y-auto pr-2 max-h-[70vh] custom-scrollbar'>
              <div>
                <label className="text-xs font-medium text-slate-500">Course Name</label>
                <Input
                  placeholder='Course Name'
                  className="mt-1"
                  onChange={(e) => onHandleInputChange('name', e.target.value)}
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-500">Course Description (Optional)</label>
                <Textarea
                  placeholder='Course Description'
                  className="mt-1"
                  onChange={(e) => onHandleInputChange('description', e.target.value)}
                />
              </div>

              {/* 3. Using a grid for number and toggle to save vertical space on mobile */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className="text-xs font-medium text-slate-500">No. of chapters</label>
                  <Input
                    placeholder='No. of chapters'
                    type='number'
                    className="mt-1"
                    onChange={(e) => onHandleInputChange('noOfChapters', Number(e.target.value))}
                  />
                </div>
                <div className='flex flex-col justify-end pb-2'>
                   <div className='flex items-center gap-3'>
                    <Switch
                      onCheckedChange={(checked) => onHandleInputChange('includeVideo', checked)}
                    />
                    <label className="text-sm">Include Video</label>
                   </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-500">Difficulty level</label>
                <Select onValueChange={(value) => onHandleInputChange('level', value)}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-500">Category</label>
                <Input
                  placeholder="Category (e.g. React, Java)"
                  className="mt-1"
                  onChange={(e) => onHandleInputChange('category', e.target.value)}
                />
              </div>

              <div className='mt-5 sticky bottom-0 bg-white pb-2'>
                <Button className='w-full bg-purple-600 hover:bg-purple-700' onClick={onGenerate} disabled={loading}>
                  {loading ? <Loader2Icon className='animate-spin mr-2' /> : <Sparkle className='mr-2' />}
                  Generate Course
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewCourseDialog;