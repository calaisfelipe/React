import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let componentRender = 0;

function YoutubeForms() {
  componentRender++;
  const form = useForm({
    defaultValues: {
      username: "batman",
      email: "felipecalais@hotmail.com",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phone: ["", ""],
      phNumbers: [{ number: "" }],
      age: 25,
      dob: "",
    },
    mode: "onSubmit"
  });

 

  const { register, control, handleSubmit, formState, getValues, setValue, reset, trigger } =
    form;


  const { errors, dirtyFields, touchedFields, isDirty, isValid, isSubmitted, isSubmitting, isSubmitSuccessful, submitCount } = formState;

  console.log({isSubmitted, isSubmitting, isSubmitSuccessful, submitCount})

  useEffect(() =>{
    if(isSubmitSuccessful){
        reset()
    }
  }, [isSubmitSuccessful, reset])

  const onSubmit = (data) => {
    console.log("form submited", data);
    
  };

  const onError = (errors) => {
    console.log('Form errors', errors)
  }

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  //const watchForm = watch();

  const handleGetValues = () => {
    console.log("get values: ", getValues());
  };
  const handleSetValues = () => {
    setValue("username", "", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  //const handleReset = () =>{
   // reset()
//  }

  return (
    <div>
      <form
        className="flexContainer"
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
      >
        <h1 style={{ color: "#fff" }}>Youtube Forms {componentRender / 2} </h1>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: "username is required",
            pattern: {
              value: /^[a-zA-Z]/,
              message: "Only letters",
            },
          })}
        />
        <p className="error">{errors.username?.message}</p>

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Preencha o campo de E-mail",
            pattern: {
              value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
              message: "invalid email format",
            },
            validate: {
              notAdmin: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "Enter a different email address"
                );
              },
              notBlackListed: (fieldValue) => {
                return (
                  !fieldValue.endsWith("baddomain.com") ||
                  "This domain is not suported"
                );
              },
              emailAvailable: async (fieldValue) =>{
                const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`)

                const data = await response.json()
                
                return(
                    data.length == 0 ||
                    "this email is already beeing used"
                )


              }
            },
          })}
        />
        <p className="error">{errors.email?.message}</p>

        <label htmlFor="channel">Channel:</label>
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required: "Este campo não pode ficar em branco",
          })}
        />
        <p className="error">{errors.channel?.message}</p>

        <label htmlFor="twitter">Twitter:</label>
        <input
          type="text"
          id="twitter"
          {...register("social.twitter", {
            disabled: true,
            required: "Este campo não pode ficar em branco",
          })}
        />
        <p className="error">{errors.social?.twitter?.message}</p>

        <label htmlFor="facebook">facebook:</label>
        <input
          type="text"
          id="facebook"
          {...register("social.facebook", {
            required: "Este campo não pode ficar em branco",
          })}
        />
        <p className="error">{errors.social?.facebook?.message}</p>

        <label htmlFor="phone">phone:</label>
        <input
          type="text"
          id="phone"
          {...register("phone.0", {
            required: "Este campo não pode ficar em branco",
          })}
        />
        <p className="error">{errors.phone?.[0]?.message}</p>
        <label htmlFor="phone2">phone2:</label>
        <input
          type="text"
          id="phone2"
          {...register("phone.1", {
            required: "Este campo não pode ficar em branco",
          })}
        />
        <p className="error">{errors.phone?.[1]?.message}</p>

        <div>
          <label htmlFor="">List of phone Numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <input
                    type="text"
                    {...register(`phNumbers.${index}.number`)}
                  />

                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <button type="button" onClick={() => append({ number: "" })}>
          Add Phone Number
        </button>

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          {...register("age", {
            valueAsNumber: true,
            required: "Age is required",
          })}
        />
        <p className="error">{errors.age?.message}</p>

        <label htmlFor="dob">Date of birth:</label>
        <input
          type="date"
          id="dob"
          {...register("dob", {
            valueAsDate: true,
            required: "date of birth is required",
          })}
        />
        <p className="error">{errors.dob?.message}</p>

        <div style={{ display: "flex", gap: "10px" }}>
          <button type="submit" disabled={!isDirty  || isSubmitting}>submit- {submitCount}</button>
          <button type="button" onClick={handleGetValues}>
            Get Values
          </button>
          <button type="button" onClick={handleSetValues}>
            Set Value
          </button>
          <button type="button" onClick={() => reset()}>
            Reset Form
          </button>
          <button type="button" onClick={() => trigger("channel")}>
            Validate
          </button>

        </div>
      </form>

      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForms;
