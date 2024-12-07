import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Rocket, ImageIcon, Twitter, Globe, Send } from "lucide-react";
import { useState } from "react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const tokenInfoSchema = z.object({
  tokenName: z.string()
    .min(3, "Token name must be at least 3 characters")
    .max(50, "Token name must not exceed 50 characters"),
  tokenSymbol: z.string()
    .min(3, "Symbol must be at least 3 characters")
    .max(5, "Symbol must not exceed 5 characters")
    .toUpperCase(),
  description: z.string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters"),
  twitterLink: z.string()
    .url("Please enter a valid URL")
    .startsWith("https://twitter.com/", "Must be a valid Twitter URL")
    .optional()
    .or(z.literal("")),
  telegramLink: z.string()
    .url("Please enter a valid URL")
    .startsWith("https://t.me/", "Must be a valid Telegram URL")
    .optional()
    .or(z.literal("")),
  websiteLink: z.string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  tokenPfp: z
    .instanceof(FileList)
    .refine((files) => files?.length === 1, "Image is required")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max file size is 5MB"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    ),
});

type TokenInfoValues = z.infer<typeof tokenInfoSchema>;

export function TokenInfoForm() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const form = useForm<TokenInfoValues>({
    resolver: zodResolver(tokenInfoSchema),
    defaultValues: {
      tokenName: "",
      tokenSymbol: "",
      description: "",
      twitterLink: "",
      telegramLink: "",
      websiteLink: "",
    },
  });

  function onSubmit(data: TokenInfoValues) {
    console.log(data);
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Rocket className="w-5 h-5 text-white/90" />
        <h2 className="text-xl font-semibold text-white/90">Pump.fun Launch</h2>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="tokenName">Token Name</Label>
          <Input
            id="tokenName"
            placeholder="e.g., Solana Doge"
            {...form.register("tokenName")}
            className="bg-white/[0.02] border-white/10"
          />
          {form.formState.errors.tokenName && (
            <p className="text-xs text-red-400">{form.formState.errors.tokenName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="tokenSymbol">Token Symbol</Label>
          <Input
            id="tokenSymbol"
            placeholder="e.g., SOLDOGE"
            {...form.register("tokenSymbol")}
            className="bg-white/[0.02] border-white/10 uppercase"
            maxLength={5}
          />
          {form.formState.errors.tokenSymbol && (
            <p className="text-xs text-red-400">{form.formState.errors.tokenSymbol.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Token PFP</Label>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label 
                htmlFor="tokenPfp" 
                className="flex items-center gap-2 w-full px-3 py-2 rounded-md border border-white/10 
                           bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer"
              >
                <ImageIcon className="w-4 h-4 text-white/70" />
                <span className="text-sm text-white/70">Choose image...</span>
                <Input
                  id="tokenPfp"
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  className="hidden"
                  {...form.register("tokenPfp", {
                    onChange: handleImageChange
                  })}
                />
              </label>
              {form.formState.errors.tokenPfp && (
                <p className="text-xs text-red-400 mt-1">{form.formState.errors.tokenPfp.message}</p>
              )}
            </div>
            {previewUrl && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                <img 
                  src={previewUrl} 
                  alt="Token PFP preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Token Description</Label>
          <Textarea
            id="description"
            placeholder="Enter a description of your token..."
            {...form.register("description")}
            className="bg-white/[0.02] border-white/10 min-h-[100px] resize-none"
          />
          {form.formState.errors.description && (
            <p className="text-xs text-red-400">{form.formState.errors.description.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Social Links</Label>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="relative">
                <Input
                  id="twitterLink"
                  placeholder="Twitter URL"
                  {...form.register("twitterLink")}
                  className="bg-white/[0.02] border-white/10 pl-9"
                />
                <Twitter className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
              </div>
              {form.formState.errors.twitterLink && (
                <p className="text-xs text-red-400 mt-1">{form.formState.errors.twitterLink.message}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <Input
                  id="telegramLink"
                  placeholder="Telegram URL"
                  {...form.register("telegramLink")}
                  className="bg-white/[0.02] border-white/10 pl-9"
                />
                <Send className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
              </div>
              {form.formState.errors.telegramLink && (
                <p className="text-xs text-red-400 mt-1">{form.formState.errors.telegramLink.message}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <Input
                  id="websiteLink"
                  placeholder="Website URL"
                  {...form.register("websiteLink")}
                  className="bg-white/[0.02] border-white/10 pl-9"
                />
                <Globe className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
              </div>
              {form.formState.errors.websiteLink && (
                <p className="text-xs text-red-400 mt-1">{form.formState.errors.websiteLink.message}</p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}