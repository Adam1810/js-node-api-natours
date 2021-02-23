const mongoose = require('mongoose');
const slugify = require('slugify');
const tourchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
    },
    slug: { type: String },
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size'],
    },
    difficulty: {
      type: String,
      reqiured: [true, 'A tour must have a difficulty'],
    },
    ratingsAverage: { type: Number, default: 4.5 },
    ratingsQuantity: { type: Number, default: 0 },
    price: { type: Number, required: [true, 'A tour must have a price'] },
    priceDiscount: { type: Number },
    summary: {
      type: String,
      required: [true, 'A tour must have a summery'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image'],
    },
    image: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

tourchSchema.virtual('durationWeek').get(function () {
  return this.duration / 7;
});

// Document Middelware: runs before, .save() and .create()
tourchSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

tourchSchema.pre('save', function (next) {
  console.log('Will save document');
  next();
});

tourchSchema.post('save', function (doc, next) {
  console.log(doc);
  next();
});
const Tour = mongoose.model('Tour', tourchSchema);

module.exports = Tour;
